<template>
    <div>
      <h2>Employee Registration</h2>
      <form @submit.prevent="save">
        <div class="form-group">
          <label>Employee name</label>
          <input type="text" v-model="employee.name" class="form-control" placeholder="Employee name" />
        </div>
  
        <div class="form-group">
          <label>Employee Address</label>
          <input type="text" v-model="employee.address" class="form-control" placeholder="Employee Address" />
        </div>
  
        <div class="form-group">
          <label>Mobile</label>
          <input type="text" v-model="employee.mobile" class="form-control" placeholder="Mobile" />
        </div>
  
        <button type="submit" class="btn btn-primary">Save</button>
      </form>
  
      <h2>Employee View</h2>
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Employee Name</th>
            <th scope="col">Address</th>
            <th scope="col">Mobile</th>
            <th scope="col">Option</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="employee in result" :key="employee.id">
            <td>{{ employee.id }}</td>
            <td>{{ employee.name }}</td>
            <td>{{ employee.address }}</td>
            <td>{{ employee.mobile }}</td>
            <td>
              <button type="button" class="btn btn-warning" @click="edit(employee)">Edit</button>
              <button type="button" class="btn btn-danger" @click="remove(employee)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  export default {
    name: 'Employee',
    setup() {
      const result = ref([]);
      const employee = ref({
        id: '',
        name: '',
        address: '',
        mobile: '',
      });
  
      const employeeLoad = () => {
        axios
          .get('/api/employees')
          .then(({ data }) => {
            console.log(data);
            result.value = data;
          });
      };
  
      const save = () => {
        if (employee.value.id === '') {
          saveData();
        } else {
          updateData();
        }
      };
  
      const saveData = () => {
        axios
          .post('/api/save', employee.value)
          .then(({ data }) => {
            alert('Saved!');
            employeeLoad();
            employee.value.name = '';
            employee.value.address = '';
            employee.value.mobile = '';
            employee.value.id = '';
          });
      };
  
      const edit = (employeeData) => {
        employee.value = { ...employeeData };
      };
  
      const updateData = () => {
        axios
          .put(`/api/update/${employee.value.id}`, employee.value)
          .then(({ data }) => {
            alert('Updated!');
            employee.value.name = '';
            employee.value.address = '';
            employee.value.mobile = '';
            employee.value.id = '';
            employeeLoad();
          });
      };
  
      const remove = (employeeData) => {
        const url = `/api/delete/${employeeData.id}`;
        axios.delete(url);
        alert('Deleted!');
        employeeLoad();
      };
  
      onMounted(() => {
        employeeLoad();
      });
  
      return {
        result,
        employee,
        save,
        edit,
        remove,
      };
    },
  };
  </script>
  