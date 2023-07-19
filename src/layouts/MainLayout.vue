<template>
  <q-layout>
    <q-header class="nav">
      <div class="header">
        <div :class="item.active ? 'header-item-active' : 'header-item'" v-for="item in menu" :key="item"
          @click="$router.push({ name: item.name })" v-text="item.label" />
      </div>
      <q-toggle :icon-color="darkMode ? 'white' : 'grey-7'" color="black" keep-color unchecked-icon="light_mode"
        checked-icon="dark_mode" v-model="darkMode" @click="$q.dark.toggle" />
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="nav flex justify-between">
      <div class="nav-footer">Made with Quasar Framework</div>
      <div class="nav-footer">Last updated at July 2023</div>
    </q-footer>
  </q-layout>
</template>

<script setup>
import Global from 'src/methods/global'

const { ref, watch, $q, $route, $router } = Global()
const darkMode = ref(false)
const menu = ref([
  {
    name: 'Home Page',
    label: 'Home',
    active: false
  },
  {
    name: 'Projects Page',
    label: 'Projects',
    active: false
  },
  {
    name: 'Info Page',
    label: 'Info',
    active: false
  }
  // {
  //   name: '',
  //   label: 'Contact',
  //   active: false
  // }
])

watch(($route.name, () => {
  onCheck()
}))

onCheck()

function onCheck () {
  for (const index in menu.value) {
    if (menu.value[index].name === $route.name) {
      menu.value[index].active = true
    } else {
      menu.value[index].active = false
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-between;
  background-color: #757575;
  padding: 10px;
  box-shadow: 0px 3px 3px 0px rgba(168, 168, 168, 0.4);

  &-footer {
    font-size: 11px;
  }
}

.header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  column-gap: 25px;
  font-family: 'Poppins Medium';
  color: white;

  &-item {
    cursor: pointer;

    &::before {
      content: "•";
      color: white;
      margin: 0 10px;
      opacity: 0;
    }

    &-active {
      cursor: pointer;

      &::before {
        content: "•";
        color: white;
        margin: 0 10px;
        opacity: 1;
      }
    }
  }
}
</style>
