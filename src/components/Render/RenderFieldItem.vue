<template>
    <div>
        <div v-if="type === 'divider'" class="form-group">
            <h4>{{ label }}</h4>
            <hr>
        </div>
        <div v-if="type === 'number'" class="form-group">
            <label :for="`param_${index}`">{{ label }}</label>
            <input type="number" class="form-control" v-model="value">
        </div>
        <div v-if="type === 'input'" class="form-group">
            <label :for="`param_${index}`">{{ label }}</label>
            <input type="input" class="form-control" v-model="value">
        </div>
        <div v-if="type === 'checkbox'" class="form-group">
            <label :for="`param_${index}`">{{ label }}</label>
            <div><input type="checkbox" v-model="checked" style="height: 20px; width: 20px;"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'RenderFieldItem',
  props: [
    'index',
    'item'
  ],
  data() {
    return {
        type: '',
        label: '',
        value: '',
        checked: false
    }
  },
  mounted() {
    this.type = this.item.type? this.item.type : 'divider';
    this.label = this.item.label? this.item.label : '';
    this.value = this.item.value? this.item.value : '';
    this.checked = this.item.checked? this.item.checked : '';
  }
}
</script>