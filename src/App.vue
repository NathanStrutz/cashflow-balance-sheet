<template>
  <div>
    <cashflow-header />
    <cashflow-statement />
    <monthly-cash-flow />
    <balance-sheet />
  </div>
</template>

<script>
import CashflowHeader from "@/sections/CashflowHeader";
import CashflowStatement from "@/sections/CashflowStatement";
import MonthlyCashFlow from "@/sections/MonthlyCashFlow";
import BalanceSheet from "@/sections/BalanceSheet";

export default {
	name: "app",
	components: { CashflowHeader, CashflowStatement, MonthlyCashFlow, BalanceSheet }
};
</script>

<style lang="scss">
html {
	font: normal 16px Georgia, Times, serif;
	color: #000;
	background-color: #fff;
}

input {
	font-size: 0.9rem;
}
input[type="text"] {
	border: 0;
	border-bottom: 2px solid #777;
	border-left: 1px dashed #ccc;
	box-sizing: border-box;
	width: 100%;
	min-width: 5px;
	padding: 4px 10px 6px 10px;
	margin: 0 0 0 5px;
}
input[type="text"]:hover,
input[type="text"]:active {
	border-bottom-color: #000;
	border-left-color: #888;
}
h3.column-title-bar {
	background-color: #000;
	color: #fff;
	text-align: center;
	margin: 0;
	padding: 3px;
}

table {
	flex: 1 1 100%;

	&.line-inputs {
		border: 2px solid #000;
		width: 100%;
	}
	&.line-inputs td {
		padding: 0.3rem;
	}

	&.line-inputs tr td:last-of-type {
		width: 30%;
	}
	&.line-inputs tr.line-input > td:first-child {
		display: flex;
		flex-direction: row;
		white-space: nowrap;
	}
	&.line-inputs tr.line-input > td:first-child > label {
		min-width: 150px;
		max-width: 40%;
	}
	&.line-inputs tr.blank-line-input td:first-child input {
		margin-left: 0;
	}
}

.line-input {
	font-family: sans-serif;
	&.all-text {
		font-size: 0.9rem;
		border-bottom: 2px solid #000;
	}
	label {
		font-size: 0.9rem;
	}
}
.line-input #income-summary,
#expense-summary,
.total-io {
	font-family: sans-serif;
	padding-left: 40%;
	display: flex;
}

.total-io {
	display: flex;
	font-weight: 800;
	padding: 0 0 0 50%;
	label {
		flex: 0 0 110px;
	}
	sub {
		display: block;
		color: #666;
	}
}

input.numeric,
input.income,
input.expense {
	text-align: right;
}
</style>
