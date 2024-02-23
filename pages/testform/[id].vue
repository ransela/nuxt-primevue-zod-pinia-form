<template>
    <Panel :key="route.path">
        <h1>useZod</h1>
        <div class="mt-4">
            <strong>Profile</strong>
        </div>
        <div class="mt-4">
            <label for="name">Name</label>
            <InputText v-model="formStore.formData.name" id="name" class="w-full"
                :pt="{ root: !!getError('name') ? '!bg-red-500' : '!bg-blue-300' }" :ptOptions="{ mergeProps: true }" />
            <div class="error">{{ getError('name') }}</div>

        </div>
        <div class="mt-4">
            <label for="email">Email</label>
            <InputText v-model="formStore.formData.email" id="email" class="w-full"
                :pt="{ root: !!getError('email') ? '!bg-red-500' : '!bg-blue-300' }" :ptOptions="{ mergeProps: true }" />

            <div class="error">{{ getError('email') }}</div>
        </div>
        <div v-if="isEditMode">
            <input type="hidden" v-model="formStore.formData.id" />
        </div>
        <Button label="Create" @click="createRecord" />
        <Button label="Update" @click="updateRecord" />
        <Button label="Delete" @click="deleteRecord" />
        <div class="clear"></div>
        <hr class="mt-4" />

        <div class="mt-4">
            <strong>Form data</strong>
            <pre>{{ formStore.formData }}</pre>
        </div>
        <div class="clear mt-4">
            <strong>Valitation errors</strong>
            <pre>{{ errors }}</pre>
        </div>
    </Panel>
</template>
  
 
<script setup lang="ts">
import { z } from 'zod';
import { useFormStore } from '../../stores/formStore';
import { useRoute } from 'vue-router';

const formStore = useFormStore();
const isLoading = ref(false);
const error = ref(null);
const route = useRoute();



watchEffect(() => {
    if (route.params.id === 'new') { // could use !isNaN(parseInt(route.params.id))
        formStore.resetForm();
    }
});






const validationSchema = z.object({
    name: z.string().min(1, 'The name field is required'),
    email: z.string().email('Please enter a valid email'),
});

const { validate, errors, isValid, getError, scrolltoError } = useZod(validationSchema, formStore.formData, { mode: 'lazy', });



const createRecord = async () => {
    await submitFormAction(formStore.createRecord);
};

const updateRecord = async () => {
    await submitFormAction(formStore.updateRecord);
};

const deleteRecord = async () => {
    await submitFormAction(formStore.deleteRecord);
};



async function submitFormAction(storeAction: { (): Promise<void> }) {
    await validate();
    if (isValid.value) {
        await storeAction(); // Execute the provided store action
    } else {
        scrolltoError('.p-invalid', { offset: 24 });
    }
}

const isEditMode = computed(() => {
    if (Array.isArray(route.params.id)) {
        return false; // Invalid for our edit mode
    }
    return !isNaN(parseInt(route.params.id));
});

if (isEditMode.value) {
    const loadFormData = async () => {
        isLoading.value = true;
        error.value = null;
        try {
            await formStore.fetchFormData();
        } catch (err) {
            console.log("error")
        } finally {
            isLoading.value = false;
        }
    };

    onMounted(loadFormData);
}


</script>
  
  
<style>
@import url("~/assets/css/base.css");
</style>
  