<template>
    <div class="footer">
        <p>Version 4.1 by <a href="http://www.github.com/femosc2"> Felix Morau</a></p>
    </div>
</template>

<script>
export default {
    data: function() {
        return {

        }
    },
    methods: {

    },

}
</script>

<style scoped>
.footer {
    width: 100%;
    bottom: 0;
    margin: 0;
    color: #fff;
    text-align: center;
    /* background-color: #303030; */
    z-index: 900;
    padding: 0;
    padding-top: 100px;
    
}
p {
    margin: 0;
}
a {
    color: #fff;
    text-decoration-line: none;
    transition: 1s;
}
a:hover {
    color: #ec2F4B;
    transition: 1s;
}
</style>
