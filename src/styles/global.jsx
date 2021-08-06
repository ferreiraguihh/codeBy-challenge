import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 :root{
     --green: #33CC95;
     --green-light: #bae2d4;

     --wheat: #f5deb3;

     --red: #E52E4D;
     --blue: #5429CC;
     --dark-blue: #1d1f27;

     --blue-light: #6933FF;

     --text-title: #363F5F;
     --text-body: #969CB3;

     --background: #F0F2F5;
     --modal-color: #FFFFFF;

     --color-border: #e0dfdf;
 }

 *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track-piece {
    background-color: #EEE;
    border-left: 1px solid #CCC
}

::-webkit-scrollbar-thumb:vertical,
::-webkit-scrollbar-thumb:horizontal {
    background-color: #BAC0C4
}

::-webkit-scrollbar-thumb:vertical:hover,

::-webkit-scrollbar-thumb:horizontal:hover {
    background-color: #717171
    }
    }

    html{
        @media(max-width: 1080px){
            font-size: 93.75%;
        }
        @media (max-width: 720px){
            font-size: 87.5%;
        }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;

        input[type=number]::-webkit-inner-spin-button { 
        -webkit-appearance: none; 
        }
        input[type=number] { 
        -moz-appearance: textfield;
        appearance: textfield;
        }
    }

    body, input, textarea, button{
        font-family: 'Poppins', sans-serif !important;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    button{
        cursor: pointer;
        transition: 0.2s;
        
        &:hover{
            filter: brightness(0.9);
        }
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay{
        background: rgb(0,0,0,0.5);
        
        position: fixed;
        top:0;
        bottom:0;
        right:0;
        left:0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        max-width: 576px;
        min-height: 300px;
        background: white;
        position: relative;
        border-radius: 0.25rem;

        h1{
            position: absolute;
            top: 50%;
            left: 22%;
            color: var(--text-title);
        }
    }

    .react-modal-close{
        position: absolute;
        right: 0px;
        top: 0px;
        border: 0;
        background: transparent;
        
        transition: 1s;
        &:hover{
            filter: brightness(0.8);
        }
    }

    img{
    width: 65%;
    height: 65%;
    object-fit: cover;
    object-position: center;
    }
`
export const Container = styled.main`
    width: 100%;
    background-image: url('https://claudia.abril.com.br/wp-content/uploads/2020/01/trufa-de-quiabo-kajakiki.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
`
export const ContainerProducts = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    /* margin-top: 2rem; */
    padding-top: 5rem;
`

export const AlignProducts = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`