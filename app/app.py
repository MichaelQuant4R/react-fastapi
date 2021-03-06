from fastapi import FastAPI, Depends, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware import Middleware
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import uvicorn
from fastapi.responses import RedirectResponse, FileResponse, HTMLResponse
app = FastAPI()

origins = [
    "https://holistic-fastapi.herokuapp.com",
    "holistic-fastapi.herokuapp.com"
]

app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"]
)


app.mount("/static", StaticFiles(directory="client/build/static"), name="static")

@app.get("/", response_class=FileResponse)
def read_index(request: Request):
    path = "client/build/index.html"
    return FileResponse(path)








@app.get("/api/data")
async def get_data(request: Request):
    print("GET DATA!")
    print(request)
    
    return {"data": True}

if __name__ == "__main__":
    uvicorn.run("app:app", debug = True, reload=True)




