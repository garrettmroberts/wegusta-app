# User

- userId
- email
- password
- firstName
- lastName

# Group

- groupId: Number
- users: Array[userIds]
- preferences: Array[Array]

# GroupUser (instantiate one for each user in a group)

- userId: Number (link to user)
- preferences: Array[categoryId]

# FoodCategory

- categoryId: Number
- categoryName: String (code-friendly name)
- categoryLabel: String (screen-friendly name)
