import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    background-color: transparent;
    border: 1px solid #c0c0c0;

    width: 350px;
    height: 350px;

    padding: 8px 8px;
    margin: 5px 10px 20px;

    img{
        width: 64%;
        height: 64%;
    }

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
export const AmountTruffle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    button{
        border: 0px;
        background-color: var(--green);
        color: black;
        padding: 0.50rem;
        border-radius: 5px;
        width: 100%;
    }

`