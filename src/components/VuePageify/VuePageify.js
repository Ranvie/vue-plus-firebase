export default {
  data(){
    return{
      buttonCount: this.createEmptyList()
    } 
  },
  props: {
    pageSize: {default: 0},
    listSize: {default: 0}
  },
  watch: {
    listSize(){
      this.buttonCount = this.createEmptyList();
    }
  },
  methods: {
    handleClick(buttonNumber){
      this.$emit('updateOffset', buttonNumber * this.pageSize);
    },
    createEmptyList(){
      if(this.pageSize <= 0 || this.listSize <= 0) { return new Array(1); }
      
      let size = Math.ceil(this.listSize/this.pageSize);

      return new Array(size);
    }
  }
}