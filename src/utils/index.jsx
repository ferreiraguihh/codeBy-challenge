import { store } from "react-notifications-component"

export function convertPriceBRL(price) {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(price)
}

export function notificationSuccess() {
    return store.addNotification({
        title: "Sucesso",
        message: "Produto adicionado no carrinho",
        type: "success",
        container: "top-left",
        insert: "top",
        animationIn: ['animated', 'fadeIn'],
        animationOut: ['animated', 'fadeOut'],

        dismiss: {
            duration: 2500,
            showIcon: true
        },
        widht: 500
    });
}

export function notificationDefault() {
    return store.addNotification({
        // title: "Sucesso",
        message: "Compra finalizda com sucesso",
        type: "default",
        container: "top-left",
        insert: "top",
        animationIn: ['animated', 'fadeIn'],
        animationOut: ['animated', 'fadeOut'],

        dismiss: {
            duration: 2500,
            showIcon: true
        },
        widht: 500
    });
}

export function notificationWarning() {
    return store.addNotification({
        title: "Atenção",
        message: "Permitimos apenas 50 trufas por item",
        type: "warning",
        container: "top-left",
        insert: "top",
        animationIn: ['animated', 'fadeIn'],
        animationOut: ['animated', 'fadeOut'],

        dismiss: {
            duration: 2500,
            showIcon: true
        },
        widht: 300
    })
}

export function notificationInfo() {
    return store.addNotification({
        title: "Sucesso",
        message: "O item foi removido com sucesso",
        type: "info",
        container: "top-left",
        insert: "top",
        animationIn: ['animated', 'fadeIn'],
        animationOut: ['animated', 'fadeOut'],

        dismiss: {
            duration: 2500,
            showIcon: true
        },
        widht: 300
    })
}