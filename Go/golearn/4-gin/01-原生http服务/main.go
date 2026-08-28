package main

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

type Response struct {
	Code int    `json:"code"`
	Data any    `json:"data"`
	Msg  string `json:"msg"`
}

func GET(res http.ResponseWriter, req *http.Request) {
	// 获取参数
	fmt.Println(req.URL.String())

	byteData, _ := json.Marshal(Response{
		Code: 0,
		Data: map[string]any{},
		Msg:  "成功",
	})
	res.Write(byteData)

}
func POST(res http.ResponseWriter, req *http.Request) {
	// 获取参数
	byteData, _ := io.ReadAll(req.Body)
	fmt.Println(string(byteData))
	byteData, _ = json.Marshal(Response{
		Code: 0,
		Data: map[string]any{},
		Msg:  "成功",
	})
	res.Write(byteData)
}

func main() {

	http.HandleFunc("/get", GET)
	http.HandleFunc("/post", POST)

	fmt.Println("http server running: http://127.0.0.1:8080")
	http.ListenAndServe(":8080", nil)
}
