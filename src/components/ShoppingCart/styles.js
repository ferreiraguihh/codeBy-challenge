import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;

    img{
        width: 6rem;
        height: 6rem;
        border: 1px solid var(--color-border);
    }

    .container-img-amount{
        display: flex;
    align-items: center;
    justify-content: flex-start;
    }
`
export const AmountTruffle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 15px;

    width: 100%;
    
    .container-price-amount{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        margin-top: 5px;

        p{
        margin-right: 33px;
        }
    }

    input{
        background-color: var(--color-border);
        border: 0px;
        padding: 5px;
        width: 35px;
        border-radius: 5px;
        text-align: center;
    }

    span{
        color: var(--green);
        font-size: 20px;
        margin: 0px 8px;
        cursor: pointer;
    }

`
export const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: var(--color-border);
`
export const HeaderCart = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 10px 17px;
    border-bottom: 1px solid var(--color-border);
`
export const BodyCart = styled.div`
    width: 100%;
    padding: 10px 17px;
    border-bottom: 1px solid var(--color-border);
    overflow: auto;
    max-height: 370px;
`
export const OverallCart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 10px 17px;
    border-bottom: 1px solid var(--color-border);

    div{
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
    }

    h3{
        background-color: var(--green-light);
        color: var(--green);
        border-radius: 15px;
        padding: 5px;
        text-align: center;
        width: 80%;
        margin-top: 5px;
    }
`
export const ButtonCart = styled.div`
    width: 100%;
    padding: 10px 17px;

button{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        color: #fff;
        background: var(--blue-light);
        border: 0;
        padding:0 2rem;
        border-radius: 0.25rem;
        height: 2.5rem;

    }
`

export const ButtonDelete = styled.button`
    background-color: var(--red);
    border: 0px;
    border-radius: 5px;
    padding: 5px;
    color: white;    
`