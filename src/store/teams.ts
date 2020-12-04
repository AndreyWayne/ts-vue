import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { $axios } from '~/utils/axios'

interface Teams {
  teamsData: any[],
  teamsTotalCount: number,
  teamsError: Boolean
}

export const state = ():Teams => ({
  teamsData: [],
  teamsTotalCount: 0,
  teamsError: false
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  SET_TEAMS_DATA: (state, newData: any) => (state.teamsData = newData),
  SET_TEAMS_TOTAL_COUNT: (state, value: number) => (state.teamsTotalCount = value),
  SET_TEAMS_ERROR: (state, value: boolean) => (state.teamsError = value)
}

export const actions: ActionTree<RootState, RootState> = {
  async ACTION_TEAMS_DATA_ENTRY ({ commit }) {
    try {

      const {
        data
      } = await $axios.$get(`${process.env.API_URL}teams`)

      commit('SET_TEAMS_DATA', data.data)
      commit('SET_TEAMS_TOTAL_COUNT', data.meta.totalCount)
      
    } catch(error) {
      commit('SET_TEAMS_ERROR', true)
    }
  }
}
