import React, { useEffect, useState } from 'react'
import { MovieShowsWrapper } from '../styles/Styles.modules';
import axios from 'axios'
import { CircularProgress } from '@mui/material';
import { AltRoute } from '@mui/icons-material';

interface Movies {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;

  // for TV Shows
  first_air_date: string;
  name: string;
  }

  interface DataProps {
    apiEndpoint: string;
    numberOfmovies: number;
    showButtons: boolean;
    tvShowOn: boolean;
    moviesOn: boolean;
    itemHeading: string;
  }

const DisplayItems: React.FC<DataProps> = ({
    apiEndpoint,
    numberOfmovies,
    showButtons,
    tvShowOn,
    moviesOn,
    itemHeading
}) => {
    const [showItems, setShowItems] = useState<Movies[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [loading, setLoading] = useState(false);
    
    // pagination from API
    useEffect(() => {
        const fetchmovies = async () => {
            try{
                const response = await axios.get(`${apiEndpoint}`, {
                    params:{
                        page: currentPage,
                    },
                });
                const {results, total_page} = response.data;
                setShowItems(results.slice(0, numberOfmovies,));
                setTotalPage(totalPage);
                setTimeout(() => {
                    setLoading(true);
                }, 1000);
            } 
                catch (err){
                console.error('Error fetching movies:', err);
                }
            };

            fetchmovies();
        }, [currentPage, apiEndpoint, numberOfmovies]);
        
        // function to change the date format
        function getFormattedDate (dateString: string | number | Date){
            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            } as Intl.DateTimeFormatOptions;
            const date = new Date (dateString);
            return date.toLocaleDateString("en-US", options)
        }

        // Next Page Button
        const nextItemsPage = () => {
            if(currentPage < totalPage){
                setCurrentPage((nextPage) => nextPage + 1) 
            }
        }
        
        // Prev Page Button
        const prevItemsPage = () => {
            if(currentPage > 1){
                setCurrentPage((prevPage) => prevPage - 1) 
            }
        }
        return (
        <MovieShowsWrapper>
            {!loading ? (
                <div className='loadingOverlay'>
                <CircularProgress size={80} color='warning'/>
                <p>Loading</p>
                </div>
            ) : (
                <>
                <div className="moviesHeading">
                    <h1>{itemHeading}</h1>
                </div>
                <div className="moviesCard">
                    {showItems.map((item)=>{
                        const percentage = (item.vote_average/10) * 100;
                        return (
                            <>
                            <div className="movies" key={item.id}>
                                <div className="moviesImage">
                                    <img src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`} alt='img'/>
                                    <span>{percentage.toFixed(0)}%</span>
                                </div>
                                <div className="moviesInfo">
                                    {moviesOn && (
                                        <>
                                        <h4>{item.title}</h4>
                                        <p>{getFormattedDate(item.release_date)}</p>
                                        </>
                                    )}

                                    {tvShowOn && (
                                        <>
                                        <h4>{item.name}</h4>
                                        <p>{getFormattedDate(item.first_air_date)}</p>
                                        </>
                                    )}
                                </div>

                            </div>
                            </>
                        );
                    })}
                    {showButtons && (
                        <div className="buttons">
                            {currentPage > 1 && (
                                <button className='btnPrev' onClick={prevItemsPage}>
                                    Back 
                                </button>
                            )}
                            <p>
                                Page | <b>{currentPage}</b>
                            </p>
                            {currentPage < totalPage && (
                                <button className='btnNext' onClick={nextItemsPage}>
                                    Next 
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </>
            )}
        </MovieShowsWrapper>
        );
};

export default DisplayItems;