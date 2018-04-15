module Main exposing (..)

import Html


main : Program Never Model Msg
main =
    Html.program
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }



-- Model


type alias Model =
    String



-- Init


init =
    ( ""
    , Cmd.none
    )



-- View


view model =
    Html.text "Hello, World!"



-- Update


type Msg
    = NoOp


update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )



-- Subscriptions


subscriptions model =
    Sub.none
