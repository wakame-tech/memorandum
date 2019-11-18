# Elixir
## run
- Install dependencies with `mix deps.get`
- Install Node.js dependencies with `cd assets && npm install`
- Start Phoenix endpoint with `mix phx.server`
- Start REPL with `iex -S mix`

## dev
Now you can visit [`localhost:3333`](http://localhost:3333) from your browser.

## location
- channel @ `/lib/elixir_prac_web/channels`
- elm @ `assets/elm/src`
- webpack config @ `/assets/webpack.config.js`
- elm root @ `/assets/elm`
- yarn root @ `/assets`

## todo
- Grid layout with `elm-ui`
- Study elm's JSON co/dec
- Study elixir's syntax
- Study elixir's concurrency/task

## tips
### Elixir
#### syntax
<https://qiita.com/song_ss/items/7e88cf919669dc560c30>

#### def struct
```elixir
defmodule BookShelf.Book do
  # if encode partly,
  # @derive { Jason.Encoder, only: [:title, ...] }
  @derive Jason.Encoder
  defstruct [:title, :isbn, :price, :bought_at]
end

defmodule BookShelf do
  @derive Jason.Encoder
  defstruct [:books]
end

shelf = %BookShelf {
  books: [
    %Book {
      title: "海洋生命5億年史",
      isbn: "9784163908748",
      price: 1620,
      bought_at: ~N[2018-09-11 00:00:00]
    }
  ]
}
```

#### json encode/decode by jaison

```elixir
shelf
|> Jason.encode
# `fn x -> x end` is anonymous function
# `anonym.()` to invoke
|> (fn {:ok, j} -> j end).()
|> Jason.decode
```

### Elm

## 
- [qiita | elixir + phoenix Channel + elm](https://qiita.com/akira_/items/eb888601222d4fa480cc)
- [qiita | elixir concurrency](https://qiita.com/song_ss/items/6a8c2ecd688a61ebebe6)
- [qiita | phoenix channel room](https://qiita.com/sand/items/d5d77db657027abe6141)
- [elm-phoenix-websocket-ports docs](https://github.com/paulstatezny/elm-phoenix-websocket-ports/blob/master/API.md)
- [elixir jason](https://dev.to/gumi/elixir-elixirjsonjason-315f)
- [Phoenix guides](https://hexdocs.pm/phoenix/overview.html)
- [Phoenix docs](https://hexdocs.pm/phoenix)
- [Phoenix github](https://github.com/phoenixframework/phoenix)