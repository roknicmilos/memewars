# Meme Wars

Welcome to Meme Wars, an engaging application that brings fun and
competition to the world of memes! Meme Wars allows users to showcase,
rate, and battle memes in a friendly and interactive environment.

---

Table of Contents
=================

* [Overview](#overview)
* [Quickstart](#quickstart)
    * [Requirements](#requirements)
    * [Start the project](#start-the-project)
* [Making changes](#making-changes)
* [API](/api/README.md)
* [APP](/app/README.md)

___

## Overview

Meme Wars utilizes [Django](https://www.djangoproject.com/), a powerful web
framework, along with [Django REST Framework](https://www.django-rest-framework.org/)
to provide a robust API for seamless communication between the client and
the server.
The client, however, is a [React](https://react.dev/) application developed
for awesome end-user experience.

Additionally, an admin panel is available for authorized administrators providing
extensive control and flexibility over the application's data.

### Key Features

- User registration and authentication via Google.
- Seamless API endpoints for creating, retrieving, updating, and deleting models.
- Engaging meme wars where users can participate and vote for their favorite memes.
- Dynamic ranking system based on user votes to highlight the most popular memes.
- Secure token-based authentication for API requests, ensuring data privacy and integrity.
- Django Admin panel for efficient data management.

___

## Quickstart

### Requirements

- [Docker Engine](https://docs.docker.com/engine/install/)

### Start the project

1. Create `.env` based on `example.env`
2. Start the app: `docker compose up`

___

## Making changes

When making changes to the project codebase, make sure to use `pre-commit`
file when creating a new commit in order to run all tests and checks that
keeps the code clean, readable, testable, extensible, maintainable, secure,
usable, etc.

1. Copy `scripts/pre-commit` file into `.git/hooks/` directory
2. Make it executable with `chmod +x .git/hooks/pre-commit`

Now, if you try to commit new changes (with `git commit ...` command), the
`pre-commit` hook will run first, and the commit will only be created if
all tests and checks from the `pre-commit` hook pass.
