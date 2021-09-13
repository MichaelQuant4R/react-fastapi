from fastapi import FastAPI, Depends, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware import Middleware
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import uvicorn
from starlette.responses import FileResponse 



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


# app.mount("/static", StaticFiles(directory="static"), name="static")

app.mount("/", StaticFiles(directory="static",html = True), name="static")

# templates = Jinja2Templates(directory="templates")

# @app.get("/")
# async def serve_spa(request: Request):
#     return templates.TemplateResponse("index.html", {"request": request})

@app.get("/")
async def read_index():
    return FileResponse('index.html')

@app.get("/api/data")
async def get_data(request: Request):
    print("GET DATA!")
    print(request)
    
    return {"data": True}



if __name__ == "__main__":
    uvicorn.run("app:app", debug = True, reload=True)




