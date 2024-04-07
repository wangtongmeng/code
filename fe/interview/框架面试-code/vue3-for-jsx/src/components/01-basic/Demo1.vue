<script>
import { ref } from 'vue'
import Child from './Child'

export default {
    components: { Child },
    setup() {
        const countRef = ref(200)

        const render = () => {
            return <p>demo1 {countRef.value}</p> // jsx
        }
        return render
    }
}
</script>