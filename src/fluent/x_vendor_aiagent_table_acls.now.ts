import { Acl } from '@servicenow/sdk/core'

export const x_vendor_aiagent_ai_agent_read_acl = Acl({
    $id: Now.ID['x_vendor_aiagent_ai_agent_read_acl'],
    type: 'record',
    table: 'x_vendor_aiagent_ai_agent' as any,
    operation: 'read',
    decisionType: 'allow',
    securityAttribute: 'user_is_authenticated',
    description: 'Allow any authenticated user to read AI Agent records',
})

export const x_vendor_aiagent_ai_agent_write_acl = Acl({
    $id: Now.ID['x_vendor_aiagent_ai_agent_write_acl'],
    type: 'record',
    table: 'x_vendor_aiagent_ai_agent' as any,
    operation: 'write',
    decisionType: 'allow',
    roles: ['itil'],
    adminOverrides: true,
    description: 'Allow itil and admin users to update AI Agent records',
})

export const x_vendor_aiagent_ai_agent_create_acl = Acl({
    $id: Now.ID['x_vendor_aiagent_ai_agent_create_acl'],
    type: 'record',
    table: 'x_vendor_aiagent_ai_agent' as any,
    operation: 'create',
    decisionType: 'allow',
    roles: ['admin'],
    adminOverrides: true,
    description: 'Allow admin users to create AI Agent records',
})

export const x_vendor_aiagent_ai_agent_delete_acl = Acl({
    $id: Now.ID['x_vendor_aiagent_ai_agent_delete_acl'],
    type: 'record',
    table: 'x_vendor_aiagent_ai_agent' as any,
    operation: 'delete',
    decisionType: 'allow',
    roles: ['admin'],
    adminOverrides: true,
    description: 'Allow admin users to delete AI Agent records',
})

export const x_vendor_aiagent_agent_tool_read_acl = Acl({
    $id: Now.ID['x_vendor_aiagent_agent_tool_read_acl'],
    type: 'record',
    table: 'x_vendor_aiagent_agent_tool' as any,
    operation: 'read',
    decisionType: 'allow',
    securityAttribute: 'user_is_authenticated',
    description: 'Allow any authenticated user to read Agent Tool records',
})

export const x_vendor_aiagent_agent_tool_write_acl = Acl({
    $id: Now.ID['x_vendor_aiagent_agent_tool_write_acl'],
    type: 'record',
    table: 'x_vendor_aiagent_agent_tool' as any,
    operation: 'write',
    decisionType: 'allow',
    roles: ['itil'],
    adminOverrides: true,
    description: 'Allow itil and admin users to update Agent Tool records',
})

export const x_vendor_aiagent_agent_tool_create_acl = Acl({
    $id: Now.ID['x_vendor_aiagent_agent_tool_create_acl'],
    type: 'record',
    table: 'x_vendor_aiagent_agent_tool' as any,
    operation: 'create',
    decisionType: 'allow',
    roles: ['admin'],
    adminOverrides: true,
    description: 'Allow admin users to create Agent Tool records',
})

export const x_vendor_aiagent_agent_tool_delete_acl = Acl({
    $id: Now.ID['x_vendor_aiagent_agent_tool_delete_acl'],
    type: 'record',
    table: 'x_vendor_aiagent_agent_tool' as any,
    operation: 'delete',
    decisionType: 'allow',
    roles: ['admin'],
    adminOverrides: true,
    description: 'Allow admin users to delete Agent Tool records',
})