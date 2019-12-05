# Misc components - items used in many places

- ## Dollar Format Input

  Our numeric input. Blur, and you get attractive, readable, integer dollar values. Focus, and the value is an editable number, the first click to focus selects the current value so that it is easy to overwrite, and non-numbers are not input.

- ## Line Input

  A table row with a label (optional), an editable description/note (optional), and a Dollar Format Input. It can emit `updateText` and `updateValue`.

- ## State Connected Input

  A Line Input that connects to a piece of state. State item must be in `$store.state[category][item]` and be of type `{note:String, value:Number}` with a mutation at `$store.mutations[category/change-prop]`.

- ## State Connected Value Input

  A Line Input, similar to State Connected Input, but only holds a value field with no possibility of text.

- ## Title Input

  Input component for the large title items: Profession, Player, Auditor
