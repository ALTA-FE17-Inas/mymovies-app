import styled from 'styled-components'

/*
font-family: 'Acme', sans-serif;
font-family: 'Agdasima', sans-serif;
font-family: 'Londrina Shadow', sans-serif;
font-family: 'Roboto Mono', monospace;
font-family: 'Roboto Serif', serif;
font-family: 'Shadows Into Light Two', cursive;
*/ 

// Header
export const NavbarWrapper = styled.div `

display: flex;
justify-content: space-between;
position: absolute;
top: 0;
left: 0;
width: 100%;
z-index: 999;

.logo {
    color: #fff;
    font-size: 2rem;
    letter-spacing: 2px;
    background: linear-gradient (to right,
        #eaff00, #f8d4d4);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-family: 'Shadows Into Light Two', cursive;
    }

.navLinks, .loginButton{
    margin-left: auto;
}

.navLinks{
    
}

.links{
    font-family: 'Acme', sans-serif;
    font-size: 20px;
    color: #ffffffe4;
}

@media (max-width:1060px){
    .logo{
        font-size: 1.6rem;
    }
    .links, .loginButton{
        font-size: 12px;
    }
}
@media (max-width:1060px){
    .logo{
        font-size: 1.6rem;
    }
    .links, .loginButton{
        font-size: 12px;
    }
}
`;

// Display Items
export const MovieShowsWrapper = styled.div`
display: flex;
flex-direction: column;
align-item: center;
border-radius: 10px;
margin-top: 5rem;
padding: 10px;
box-shadow: 0 5px 5px -5px rgba(0,0,0,0,5);

.loadingOverlay{
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100vh;
background-color: rgba (3,37,65,0,4);

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: #fff;
z-index: 9999;
>p{
    font-size: 2rem;
    margin-top: 1rem;
    font-family: 'Acme', sans-serif;
    letter-spacing: 2px;
}
}

.movieHeading{
    width: 100%;
    >h1{
        margin-botton: 1.5rem;
        font-family: 'Agdasima', sans-serif;
        margin-left: 2rem;
    }
}

.movieCard{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;

    .movie{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        cursor: pointer;
        transition: all 0.5s ease-in-out;
        margin-button: 2rem;

        .movieImage{
            display: flex;
            justify-content: center;
            aluign-items: center;
            flex-direction: column;
            cursor: pointer;

            >img{
                border-radius:10px;
                border-bottom-right-radius: 25px;
                box-shadow: 1px 1px 10px 1px #000;
                padding: 5px;
            }
            >span{
                border: none;
                height: 35px;
                width: 35px;
                border-radius: 360px;
                background-color: #f764429;
                display: flex;
                justify-content: center;
                align-items: center;
                align-self: center;
                color: white;
                padding: 5px;
                font-family: 'Agdasima', sans-serif;
                font-size: 15px;
                position: relative;
                bottom: 20px;
            }
        }

        &:hover{
            transform: scale(1.04);
        }

        .movieInfo{
            display: flex;
            flex-direction: column;
            margin-top: 0;
            text-align: center;
            justify-content: center;
            position: relative;
            bottom: 10px;

            >h1{
                margin-bottom: 0;
                width: 230px;
                text-align: center;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            >p{
                margin: 8px 0;
                color: grey;
                border-bottom: 1px solid grey;
            }
        }
    }
}

.buttons{
    text-align: center;
    border: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 90%;
    margin: 10px;
    
    >p{
        font-family: 'Agdasima', sans-serif;
    }

    .btnPrev,
    .btnNext{
        border: none;
        outLine: none;
        color: #fff;
        font-size: 18px;
        font-weight: bold;
        background-color: #f764429;
        font-family: 'Acme', sans-serif;
        border-radius: 5px;

        &:hover{
            background-color: #000;
            cursor: pointer;
        }
    }
}
}
}

`;