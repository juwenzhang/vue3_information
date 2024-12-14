import { mapState, useStore } from "vuex"
import { computed } from "vue"

export function useGetStoreFN(mapper) {
    const store = useStore()
    const getStoreObj = mapState(mapper)  // 实现的获取到了每一个的函数对象
    let newStoreObj = {}

    Object.keys(getStoreObj).forEach((key) => {
        newStoreObj[key] = computed(getStoreObj[key].bind({$state: store}))
    })

    return newStoreObj
}