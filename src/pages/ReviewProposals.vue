<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col class="text-center pt-4">
          <h1>Review proposals</h1>
        </b-col>
      </b-row>
      <b-row class="pt-3">
        <b-col class="text-center">
          <b-table striped hover :items="items" :fields="fields">
            <template slot="actions" slot-scope="row">
                <b-button @click="deleteModal(row.item)">DELETE</b-button>
            </template>
          </b-table>
        </b-col>
      </b-row>
    </b-container>
    <b-modal @ok="deleteProposal()" id="modal-proposal-delete" title="Delete proposal">
      Do you want to delete {{proposalDelete && proposalDelete.link}}?
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import { deleteProposal, getProposals } from '../api/proposal'
export default {
  name: 'app',
  mounted() {
   this.loadProposals()
  },
  data() {
    return {
      items: [],
      fields: [
        {key: 'user.username', label: 'User'},
        {key: 'category.name', label: 'Category'},
        'link',
        {key: 'actions', label: ''}
      ],
      page: 0,
      proposalDelete: null,
    }
  },
  computed: {
    ...mapGetters('auth', {
      user: 'user'
    })
  },
  methods: {
    async loadProposals() {
       const proposals = await getProposals({
        token: this.user.token,
        page: this.page
      })
      if (proposals.data) {
        this.items = proposals.data
      }
    },
    deleteModal(proposal) {
      this.proposalDelete = proposal
      this.$bvModal.show('modal-proposal-delete')
    },
    async deleteProposal() {
      await deleteProposal({
        token: this.user.token,
        id: this.proposalDelete.id
      })
      this.proposalDelete = null
      this.loadProposals()
    }
  }
}
</script>

<style>
</style>
