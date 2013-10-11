module.exports = {
  name: 'customer',
  methods: {
    create: {
      path: 'customers',
      method: 'post'
    },
    update: {
      path: 'customers',
      method: 'put'
    },
    list: {
      path: 'customers',
      method: 'get'
    },
    id: {
      path: 'customers/:customer_id',
      method: 'get'
    },
    add_card: {
      path: 'customers/:customer_id',
      method: 'put',
      requires: [
        'card_uri'
      ]
    },
    list_cards: {
      path: 'customers/:customer_id/cards',
      method: 'get'
    },
    add_bank: {
      path: 'customers/:customer_id',
      method: 'put',
      requires: [
        'bank_account_uri'
      ]
    },
    list_banks: {
      path: 'customers/:customer_id/bank_accounts',
      method: 'get'
    },
    add_credit: {
      path: 'customers/:customer_id/credits',
      method: 'post',
      requires: [
        'amount'
      ]
    },
    list_credits: {
      path: 'customers/:customer_id/credits',
      method: 'get'
    },
    add_debit: {
      path: 'customers/:customer_id/debits',
      method: 'post'
    },
    list_debits: {
      path: 'customers/:customer_id/debits',
      method: 'get'
    },
    list_holds: {
      path: 'customers/:customer_id/holds',
      method: 'get'
    },
    add_refund: {
      path: 'customers/:customer_id/refunds',
      method: 'post',
      requires: [
        'debit_uri'
      ]
    },
    list_refunds: {
      path: 'customers/:customer_id/refunds',
      method: 'get'
    },
    list_transactions: {
      path: 'customers/:customer_id/transactions',
      method: 'get'
    },
    delete: {
      path: 'customers/:customer_id',
      method: 'delete'
    }
  }
}