import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: var(--wheat);
    border: 2px solid #f5deb363;
    background-color: rgb(0 0 0 / 50%);
    box-shadow: 0px 0px 8px #f5deb34d;
    border-radius: 10px;

    width: 345px;
    height: 340px;

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
        background-color: var(--wheat);
        color: black;
        padding: 0.50rem;
        border-radius: 5px;
        width: 100%;
    }

`