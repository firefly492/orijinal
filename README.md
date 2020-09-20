# README

## users テーブル

| Column   | Type   | Options     |
| -------- | ------ | ----------- |
| name     | string | null: false |
| email    | string | null: false |
| password | string | null: false |

### Association

- has_many :posts
- has_many :commits

## posts テーブル

| Column   | Type      | Options                        |
| -------- | ----------| -------------------------------|
| title    | string    | null: false                    |
| content  | text      | null: false                    |
| image    | img       | null: false                    |
| user_id  | reference | null: false, foreign_key: true |

### Association

- has_many :users
- has_many :commits

## comments テーブル

| Column   | Type      | Options                        |
| -------- | ----------| -------------------------------|
| user_id  | reference | null: false, foreign_key: true |
| post_id  | reference | null: false, foreign_key: true |

### Association

- belongs_to :user
- belongs_to :commit