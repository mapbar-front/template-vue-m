<script lang="ts" setup>
// 定义props
defineProps<{
  msg: string;
}>();
// 定义emits
const emit = defineEmits(["change", "update"]);
// 定义click事件
const handleEvent = () => {
  console.log("handleEvent");
  emit("update");
};
// 定义响应事件
const changeEvent = (e: Event) => {
  console.log((e.target as HTMLInputElement).value);
};
</script>
<template>
  <div class="base-demo">
    <div>{{ msg }}</div>
    <input type="text" @input="changeEvent" />
    <button class="button" @click="handleEvent">click</button>
  </div>
</template>
<style scoped>
.base-demo {
  width: 100%;
  height: 100%;
  background-color: #f5f6fa;
}
</style>
