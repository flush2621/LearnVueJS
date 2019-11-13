<template>
  <q-page class="bg-grey-3 column">
    <div class="row q-pa-sm bg-primary">
      <q-input 
        v-model="newTask"
        @keyup.enter="addTask"
        class="col"
        square
        filled 
        bg-color="white"
        placeholder="Add task"
        dense>
        <template v-slot:append>
          <q-btn 
            @click="addTask"
            round 
            dense 
            flat 
            icon="add" />
        </template>
      </q-input>
    </div>
    <q-list class="bg-white"
      separator
      bordered>
      <q-item 
        v-for="(task,index) in tasks"
        :key="task.title"
        @click="task.done = !task.done"
        clickable
        :class="{ 'done bg-blue-1' : task.done }"
        v-ripple>
        <q-item-section avatar>
          <q-checkbox v-model="task.done" color="primary" class="no-pointer-events" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ task.title }}</q-item-label>
        </q-item-section>
        <q-item-section
          v-if="task.done"
          side>
          <q-btn 
            flat 
            round 
            dense 
            @click="deleteTask(index)"
            color="primary" 
            icon="delete">
          </q-btn>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      newTask: '',
      tasks: [
        {
          title: 'Get bananas',
          done: false
        },
        {
          title: 'Eat bananas',
          done: false
        },
        {
          title: 'Poo bananas',
          done: false
        }
      ]
    }
  },
  methods: {
    deleteTask(index) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Really delete?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.tasks.splice(index,1)
        this.$q.notify('Task deleted')
      })
    },
    addTask() {
      this.tasks.push({
        title: this.newTask,
        done: false
      })
    }
  }
}
</script>
<style lang="scss">
  .done {
    .q-item__label{
      text-decoration: line-through;
      color: #bbb;
    }
  }
</style>
