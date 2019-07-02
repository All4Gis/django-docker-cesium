# Dockerfile

# Pull base image
FROM python:3.7-slim

# Set environment varibles
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set work directory
WORKDIR /code

# Install dependencies
RUN pip install pipenv
COPY ./Pipfile /code/Pipfile
RUN pipenv install --system --skip-lock

# Copy project
COPY . /code/
