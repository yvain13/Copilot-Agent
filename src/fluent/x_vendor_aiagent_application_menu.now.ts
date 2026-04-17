import { ApplicationMenu, Record } from '@servicenow/sdk/core'

export const x_vendor_aiagent_application_menu = ApplicationMenu({
    $id: 'x_vendor_aiagent_application_menu',
    title: 'Copilot AiAgent Manager',
    name: 'copilot_aiagent_manager',
    hint: 'Manage AI Agent records',
    description: 'Navigation menu for viewing and creating AI Agent records.',
    active: true,
})

export const x_vendor_aiagent_ai_agents_module = Record({
    $id: 'x_vendor_aiagent_ai_agents_module',
    table: 'sys_app_module',
    data: {
        title: 'AI Agents',
        application: x_vendor_aiagent_application_menu,
        link_type: 'LIST',
        name: 'x_vendor_aiagent_ai_agent',
        hint: 'View AI Agent records',
        active: true,
        order: 100,
    },
})

export const x_vendor_aiagent_new_ai_agent_module = Record({
    $id: 'x_vendor_aiagent_new_ai_agent_module',
    table: 'sys_app_module',
    data: {
        title: 'New AI Agent',
        application: x_vendor_aiagent_application_menu,
        link_type: 'NEW',
        name: 'x_vendor_aiagent_ai_agent',
        hint: 'Create a new AI Agent record',
        roles: ['admin'],
        active: true,
        order: 200,
    },
})
