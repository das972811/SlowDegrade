<script setup>
    import slowDegradeIcon from '@/assets/img/slowDegradeIcon.jpeg';
</script>

<template>
    <div class="nav-container">
        <section class="band-icon-container">
            <img :src="slowDegradeIcon" alt="Band Image Icon"/>
        </section>
        <section class="nav-links-container">
            <ul class="nav-links">
                <!-- Events -->
                <li><a href="#">Desolation</a></li> 
                <!-- Musics -->
                <li><a href="#">Melancholy</a></li>
                <!-- Artist Press Kits -->
                <li><a href="#">Woes</a></li>
                <!-- Availability -->
                <li><a href="#">Solitude</a></li>
            </ul>
        </section>
    </div>
</template>

<style scoped>
.nav-container{
    display: flex;
    justify-content: center;
    align-items: center;
}


.nav-links {
    list-style: none;
    display: flex;
}
.nav-links a {
    text-decoration: none;
}

</style>