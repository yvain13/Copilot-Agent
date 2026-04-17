# Copilot-Agent

Copilot-Agent is a ServiceNow Fluent app for managing AI Agent records inside a ServiceNow instance. It defines the application metadata in TypeScript and uses the Now SDK to build and deploy the app.

## Overview

The app centers on the `AI Agent` table and provides a simple management experience for tracking agent details such as:

- name and description
- status and agent type
- owner and connected CI
- version, last active time, and documentation URL

The current implementation also includes:

- application navigation for listing and creating AI Agent records
- ACLs for controlling read, write, create, and delete access
- a client script that automatically sets existing AI Agent records to **Active** when they are opened

## Project structure

- `src/fluent/tables/` contains the Fluent table definitions
- `src/fluent/*.now.ts` contains app metadata such as ACLs, menus, modules, and client scripts
- `src/fluent/generated/` contains generated key metadata used by the app

## Development

This project uses the Now SDK workflow:

- `npm run build` - build the Fluent app
- `npm run deploy` - install the app to the target instance
- `npm run transform` - transform source metadata
- `npm run types` - refresh SDK dependencies and types
