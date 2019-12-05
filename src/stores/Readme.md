# Cash Flow Stores

Vuex store modules for holding and changing state. They are in these modules in order to keep individual store file sizes down. Construction without modules would have created a single humongous state that would have been unwieldy.

The major sections of the game sheet have their own module - Income and Expenses, Assets and Liabilities. Only two stores don't match up to this pattern.

- ## Investments Store

  Real estate, businesses, and stocks/bonds/CDs are iterative in nature, so they naturally share some commonalities. Also, data from real estate and businesses are each repeated in 3 locations (income, assets, and liabilities), so they wouldn't naturally live in any of those other stores.

- ## Meta Store

  Contains items that are useful to the form but not specific to the 4 primary sections. This is where the occupation and player name are stored.
