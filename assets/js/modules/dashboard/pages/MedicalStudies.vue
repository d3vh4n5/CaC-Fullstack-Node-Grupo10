<script setup>

const data = [
    {
        file: "Archivo",
        name: "Archivo",
        date: "26-06-2024",
        type: "Blood"
    },
    {
        file: "Archivo",
        name: "Archivo",
        date: "26-06-2024",
        type: "Blood"
    },
    {
        file: "Archivo",
        name: "Archivo",
        date: "26-06-2024",
        type: "Blood"
    },
]

</script>

<template>
    <div class="p-3">
        <button class="btn btn-primary">+ Agregar estudio</button>
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Titulo</th>
                    <th>Titulo</th>
                    <th>Titulo</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in data">
                    <td>{{ item.file }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.type }}</td>
                    <td>{{ item.date }}</td>
                    <td>
                        <button class="btn">✏️</button>
                        <button class="btn">❌</button>
                    </td>
                </tr>
            </tbody>
            
        </table>
    </div>
</template>