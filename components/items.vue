<script setup lang="ts">
import { useVModel } from "@vueuse/core"

interface Props {
  modelValue?: any | null
  colors: any
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
  colors: null,
});

const emit = defineEmits(["update:modelValue"]);
const model = useVModel(props, "modelValue", emit)
</script>
<template>
    <v-sheet class="ma-2 pa-3">
        <v-item-group v-model="model" mandatory class="flex items-center space-x-3">
            <v-item v-for="color in props.colors" :key="color.name" v-slot="{ isSelected, toggle }" :value="color">
                <div :class="[
                    color.selectedClass,
                    isSelected ? 'ring ring-offset-1' : '',
                    'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                ]" @click="toggle">
                    <span aria-hidden="true"
                        :class="[color.class, 'h-8 w-8 rounded-full border border-black border-opacity-10']" />
                </div>
            </v-item>
        </v-item-group>
    </v-sheet>
</template>
