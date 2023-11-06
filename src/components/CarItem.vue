<template>
    <div class="item-container">
        <div class="img">
            <img :src="obj.image" />
        </div>
        <div class="info-container">
            <h3>{{ obj.make }}</h3>
            <p>{{ obj.model }}</p>
            <div class="price-container">
                <h1>{{ obj.price }} $</h1>
                <p>- {{ setInUAH }} UAH</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CarItem',
    props: {
        obj: {
            type: Object,
            default: () => ({}),
        },
    },
    computed: {
        setInUAH() {
            return this.obj.price * 37
        },
    },
}
</script>
<style lang="scss" scoped>
.item-container {
    display: flex;
    align-items: center;
    gap: 20px;
    .img {
        img {
            width: 150px;
            height: 150px;
        }
    }
    .info-container {
        .price-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;

            h1 {
                color: green;
            }
        }
    }
}
</style>
