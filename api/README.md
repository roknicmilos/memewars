# Meme Wars API

Here, you can find necessary information about the REST API implemented
in [Django](https://www.djangoproject.com/) and
[Django REST Framework](https://www.django-rest-framework.org/).

___

Table of Contents
=================

* [Tests and linting](#tests-and-linting)
* [Initial data](#initial-data)
* [Updating dependencies](#updating-dependencies)

___

## Tests and linting

### Run tests

  ```bash
  docker compose run --rm django sh -c 'pytest'
  ```

The above command will run all tests.
Flag `-t` is optional (it provides additional output coloring when used).

To run the same tests in parallel, append `-n auto` to the `pytest` command:

  ```bash
  docker compose run --rm django sh -c 'pytest -n auto'
  ```

### Run tests with coverage

  ```bash
  docker compose run --rm django sh -c 'pytest --cov -n auto'
  ```

This will run all tests in parallel with coverage report.
Running tests like this is necessary to generate the tests coverage report.

### Generate tests coverage report

  ```bash
  docker compose run --rm django sh -c 'coverage html'
  ```

This will generate html for the tests coverage report which is useful when trying
to find out exactly which code is not covered by tests.
You can simply open the generated `index.html` in your browser and explore all files
and places in those files which are covered, not covered and ignored by tests coverage.

If you don't want the html, and you just want to see the overall coverage report, you
can run:

  ```bash
  docker compose run --rm django sh -c 'coverage report'
  ```

This will print the coverage report generated the last time tests wer run with the
coverage ([Run tests with coverage](#run-tests-with-coverage)).

### Run linters

#### Code security

  ```bash
  docker compose run --rm django sh -c 'bandit .'
  ```

The above command will run [Bandit](https://bandit.readthedocs.io/) that checks
security issues in Python code.

#### Code quality

  ```bash
  docker compose run --rm django sh -c 'flake8 --count'
  ```

The above command will run [Flake8](https://flake8.pycqa.org/) that checks
quality of Python code.
If there are no issues, the command will not have any output.
Otherwise, the issues will be displayed in the output of the command.

#### Code formatting

- [**Black**](https://black.readthedocs.io/)

  ```bash
  docker compose run --rm django sh -c 'black --check .'
  ```

  The above command will run Black to check formatting of Python code.
  The output will show files that require reformatting.

  To format files with Black, run the above command without `--check` flag.


- [**isort**](https://pycqa.github.io/isort/)

  ```bash
  docker compose run --rm django sh -c 'isort --check .'
  ```

  The above command will run `isort` to check imports in Python files.
  The output will show files that require reformatting of imports.

  To format files with Black, run the above command without `--check` flag.

### Simultaneously run tests with coverage, linters and formatter checks

  ```bash
  docker compose run --rm django sh /app/scripts/entrypoint.sh test
  ```

The above command will:

1. run all tests with coverage in parallel using [Pytest](https://docs.pytest.org/)
   and [Coverage](https://coverage.readthedocs.io/)
2. run [Bandit](https://bandit.readthedocs.io/) to check security of Python code
3. run [Flake8](https://flake8.pycqa.org/) to check quality of Python code
4. run [Black](https://black.readthedocs.io/) to check formatting of Python code
5. run [isort](https://pycqa.github.io/isort/) to check imports in Python files

The flag `-t` is optional just like when [only running tests](#run-tests).

___

## Initial Data

### Create a superuser

Superuser should already be created after running `docker compose up`
with the credentials from `.env` file. If you want to create a new one, run:

  ```bash
  docker compose run --rm django sh -c 'python3 manage.py createsuperuser'
  ```

If the superuser with the credentials from the `.env` file does not exist, you
can create it by running:

  ```bash
  docker compose run --rm django sh -c 'python3 manage.py createsuperuser --noinput'
  ```

### Load fixtures

To load all the fixtures, run the comment below (**NOTE: this will override table
raws with the same primary keys as those specified in fixtures**):

  ```bash
  docker compose run --rm django sh -c 'python3 manage.py load_data'
  ```

Or you can load specific fixtures (in a specific order) by passing them as
arguments to the same command. For example, to load `users` fixtures, and
then `wars` fixtures:

  ```bash
  docker compose run --rm django sh -c 'python3 manage.py load_data users wars'
  ```

___

## Updating dependencies

Execute the following set of commands to interactively upgrade requirements packages:

  ```bash
  docker compose run --rm django sh -c 'pip install pip-upgrader; 
    pip-upgrade /app/requirements/*.txt --skip-virtualenv-check; 
    --skip-package-installation'  
  ```
