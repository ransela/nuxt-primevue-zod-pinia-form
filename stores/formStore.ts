import { defineStore } from "pinia";

interface FormData {
  id?: number | null; // Optional for new records
  name: string;
  email: string;
}

interface BackendResponse {
  totalRecords: number;
  data: FormData[];
}

export const useFormStore = defineStore("form", () => {
    
  const formData = reactive<FormData>({
    id: null,
    name: "",
    email: "",
  });

  function resetForm() {
    Object.assign(formData, reactive({ id: null, name: '', email: '' }));
  }

  async function createRecord() {
    // For now, simulate creation
    console.log("Record created:", formData); // Replace with API call later
    alert("Record Created");
  }

  async function updateRecord() {
    // For now, simulate update
    console.log("Record updated:", formData); // Replace with API call later
    alert("Record Updated");
  }

  async function deleteRecord() {
    // For now, simulate deletion
    console.log("Record deleted:", formData); // Replace with API call later
    alert("Record Deleted");
  }

  async function fetchFormData() {
    try {
      const responseData: BackendResponse = await $fetch(
        "http://localhost:5005/testform"
      );

      if (responseData.data.length > 0) {
        Object.assign(formData, responseData.data[0]);
      }
    } catch (error) {
      // Handle fetch errors appropriately
      console.error("Error fetching data:", error);
    }
  }

  return { formData, resetForm, fetchFormData, createRecord, updateRecord, deleteRecord };
});
