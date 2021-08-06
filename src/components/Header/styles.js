import styled from 'styled-components'

export const Container = styled.div`
position: fixed;
top: 0;
    width: 100%;
    padding: 0px 20px;
    height: 50px;
    background-color: var(--dark-blue);
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    img{
        width: 80px;
        height: 80px;
    }
`

export const CartIcon = styled.div`
        position: relative;
        display: flex;
        align-items: center;
        cursor: pointer;
        color: white;
`

export const ItemCount = styled.div`
        position: absolute;
        display: grid;
        place-items: center;
        background-color: var(--red);
        z-index: 10;
        border-radius: 50%;
        font-size: 10px;
        height: 14px;
        width: 14px;
        top: -50%;
        right: -50%;
`