@echo off
setlocal enabledelayedexpansion

:: Set the base directory and output file
set "base_dir=src\assets\tutorials"
set "output_file=routes.txt"

:: Clear the output file if it exists
> "%output_file%" echo.

:: Navigate through all .md files inside the base directory
for /r "%base_dir%" %%F in (*.md) do (
    :: Get the folder name and file name without extension
    for %%A in ("%%~dpF.") do set "folder=%%~nA"
    set "filename=%%~nF"

    :: Replace spaces in the filename with hyphens (if needed)
    set "filename=!filename: =-!"

    :: Construct the route and append it to the output file
    echo /tutorials/!folder!/!filename!>> "%output_file%"
)

:: Notify user of completion
echo Routes have been successfully generated in "%output_file%".
