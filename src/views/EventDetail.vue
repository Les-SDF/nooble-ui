<script setup lang="ts">
import { apiStore } from '@/util/apiStore.ts'
import EntityEnum from '@/util/lib/entityEnum.ts'
import { useRoute } from 'vue-router'

const route = useRoute();

apiStore.getById(EntityEnum.event,Number(route.params.id)).then(reponseJSON => {
  console.log(reponseJSON);
});
</script>



<style scoped lang="scss">

</style>
