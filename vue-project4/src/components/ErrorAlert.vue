<template>
    <dialog open>
        <slot></slot>
    </dialog>
</template>

<style scoped>
dialog {

position: fixed;
top: 20vh;
left: 30%;
width: 40%;
background-color: aliceblue;
box-shadow: 0 2px 8px black;
padding: 1rem;
}
</style>