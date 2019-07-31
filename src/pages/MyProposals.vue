<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col class="text-center pt-4">
          <h1>My proposals</h1>
        </b-col>
      </b-row>
      <b-row class="pt-3">
        <b-col class="text-center">
          <b-table striped hover :items="items" :fields="fields">
            <template slot="actions" slot-scope="row">
                <b-button @click="deleteModal(row.item)">DELETE</b-button>
            </template>
          </b-table>
          <b-button @click="createModal()">Add</b-button>
        </b-col>
      </b-row>
    </b-container>
    <b-modal @ok="deleteProposal()" id="modal-proposal-delete" title="Delete proposal">
      Do you want to delete {{proposalDelete && proposalDelete.link}}?
    </b-modal>
    <b-modal id="modal-proposal-create" title="Create proposal">
      <div slot="modal-footer"/>
      <new-proposal @submit="loadProposals()"/>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NewProposal from '../components/NewProposal'

import { deleteProposal, getMyProposals } from '../api/proposal'
export default {
  name: 'app',
  mounted() {
   this.loadProposals()
  },
  data() {
    return {
      items: [],
      fields: [
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
       const proposals = await getMyProposals({
        token: this.user.token,
        page: this.page
      })
      if (proposals.data) {
        this.items = proposals.data
      }
    },
    createModal() {
      this.$bvModal.show('modal-proposal-create')
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
  },
  components: {
    NewProposal
  }
}
</script>

<style>
</style>
