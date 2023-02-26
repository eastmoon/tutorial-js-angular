@rem
@rem Copyright 2020 the original author jacky.eastmoon
@rem All commad module need 3 method :
@rem [command]        : Command script
@rem [command]-args   : Command script options setting function
@rem [command]-help   : Command description
@rem Basically, CLI will not use "--options" to execute function, "--help, -h" is an exception.
@rem But, if need exception, it will need to thinking is common or individual, and need to change BREADCRUMB variable in [command]-args function.
@rem NOTE, batch call [command]-args it could call correct one or call [command] and "-args" is parameter.
@rem

@rem ------------------- batch setting -------------------
@rem setting batch file
@rem ref : https://www.tutorialspoint.com/batch_script/batch_script_if_else_statement.htm
@rem ref : https://poychang.github.io/note-batch/

@echo off
setlocal
setlocal enabledelayedexpansion

@rem ------------------- declare CLI file variable -------------------
@rem retrieve project name
@rem Ref : https://www.robvanderwoude.com/ntfor.php
@rem Directory = %~dp0
@rem Object Name With Quotations=%0
@rem Object Name Without Quotes=%~0
@rem Bat File Drive = %~d0
@rem Full File Name = %~n0%~x0
@rem File Name Without Extension = %~n0
@rem File Extension = %~x0

set CLI_DIRECTORY=%~dp0
set CLI_FILE=%~n0%~x0
set CLI_FILENAME=%~n0
set CLI_FILEEXTENSION=%~x0

@rem ------------------- declare CLI variable -------------------

set BREADCRUMB=cli
set COMMAND=
set COMMAND_BC_AGRS=
set COMMAND_AC_AGRS=

@rem ------------------- declare variable -------------------

for %%a in ("%cd%") do (
    set PROJECT_NAME=%%~na
)
set PROJECT_ENV=dev

@rem ------------------- execute script -------------------

call :main %*
goto end

@rem ------------------- declare function -------------------

:main
    set COMMAND=
    set COMMAND_BC_AGRS=
    set COMMAND_AC_AGRS=
    call :argv-parser %*
    call :main-args-parser %COMMAND_BC_AGRS%
    IF defined COMMAND (
        set BREADCRUMB=%BREADCRUMB%-%COMMAND%
        findstr /bi /c:":!BREADCRUMB!" %CLI_FILE% >nul 2>&1
        IF errorlevel 1 (
            goto cli-help
        ) else (
            call :main %COMMAND_AC_AGRS%
        )
    ) else (
        call :%BREADCRUMB%
    )
    goto end

:main-args-parser
    for /f "tokens=1*" %%p in ("%*") do (
        for /f "tokens=1,2 delims==" %%i in ("%%p") do (
            call :%BREADCRUMB%-args %%i %%j
            call :common-args %%i %%j
        )
        call :main-args-parser %%q
    )
    goto end

:common-args
    set COMMON_ARGS_KEY=%1
    set COMMON_ARGS_VALUE=%2
    if "%COMMON_ARGS_KEY%"=="-h" (set BREADCRUMB=%BREADCRUMB%-help)
    if "%COMMON_ARGS_KEY%"=="--help" (set BREADCRUMB=%BREADCRUMB%-help)
    goto end

:argv-parser
    for /f "tokens=1*" %%p in ("%*") do (
        IF NOT defined COMMAND (
            echo %%p | findstr /r "\-" >nul 2>&1
            if errorlevel 1 (
                set COMMAND=%%p
            ) else (
                set COMMAND_BC_AGRS=!COMMAND_BC_AGRS! %%p
            )
        ) else (
            set COMMAND_AC_AGRS=!COMMAND_AC_AGRS! %%p
        )
        call :argv-parser %%q
    )
    goto end

@rem ------------------- Main method -------------------

:cli
    goto cli-help

:cli-args
    set COMMON_ARGS_KEY=%1
    set COMMON_ARGS_VALUE=%2
    goto end

:cli-help
    echo This is a Command Line Interface with project %PROJECT_NAME%
    echo If not input any command, at default will show HELP
    echo.
    echo Options:
    echo      --help, -h        Show more information with CLI.
    echo.
    echo Command:
    echo      ng                Startup and into angular SDK to control workspace.
    echo      dev               Startup and into angular SDK with repo directory.
    echo.
    echo Run 'cli [COMMAND] --help' for more information on a command.
    goto end

@rem ------------------- Common Command method -------------------

@rem ------------------- Command "ng" method -------------------

:cli-ng
    echo ^> Create cache directory
    if NOT EXIST %CLI_DIRECTORY%\cache (
        mkdir %CLI_DIRECTORY%\cache
    )

    echo ^> Build image
    docker build --rm^
        -t angular.sdk:%PROJECT_NAME%^
        ./conf/docker/angular

    echo ^> Startup service
    docker rm -f %PROJECT_NAME%-ng
    docker run -ti --rm ^
        -v %CLI_DIRECTORY%\repo\%1:/repo ^
        -w "/repo" ^
        -p 4200:4200 ^
        --name %PROJECT_NAME%-ng ^
        angular.sdk:%PROJECT_NAME% bash
    goto end

:cli-ng-args
    set COMMON_ARGS_KEY=%1
    set COMMON_ARGS_VALUE=%2
    goto end

:cli-ng-help
    echo This is a Command Line Interface with project %PROJECT_NAME%
    echo Startup Server
    echo.
    echo Options:
    echo      --help, -h        Show more information with UP Command.
    goto end

@rem ------------------- Command "dev" method -------------------

:exec-docker
    echo ^> Create cache directory
    if NOT EXIST %CLI_DIRECTORY%\cache\%1\dist (
        mkdir %CLI_DIRECTORY%\cache\%1\dist
    )

    echo ^> Build image
    docker build --rm^
        -t angular.sdk:%PROJECT_NAME%^
        ./conf/docker/angular

    echo ^> Startup service
    docker rm -f %PROJECT_NAME%-dev
    docker run -ti --rm ^
        -v %CLI_DIRECTORY%\repo\%1:/repo ^
        -v %CLI_DIRECTORY%\cache\%1\dist:/repo/dist ^
        -p 80:4200 ^
        -w "/repo" ^
        --name %PROJECT_NAME%-dev ^
        angular.sdk:%PROJECT_NAME%
    goto end

:cli-dev
    if DEFINED SUB_REPOSITORY (
        if EXIST %CLI_DIRECTORY%\repo\%SUB_REPOSITORY% (
            call :exec-docker %SUB_REPOSITORY%
        ) else (
            echo chosen sub-repository is not exist.
        )
    ) else (
        echo sub-repository was not choose.
    )
    goto end

:cli-dev-args
    set COMMON_ARGS_KEY=%1
    set COMMON_ARGS_VALUE=%2
    if "%COMMON_ARGS_KEY%"=="--repo" (set SUB_REPOSITORY=%COMMON_ARGS_VALUE%)
    goto end

:cli-dev-help
    echo This is a Command Line Interface with project %PROJECT_NAME%
    echo Startup Server
    echo.
    echo Options:
    echo      --help, -h        Show more information with UP Command.
    echo      --repo            Choose a sub-repository target in repo folder.
    goto end

@rem ------------------- End method-------------------

:end
    endlocal
