import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'ff9571aaf179466892364710799640c6'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '198c3dc536d5477491a4cf73555ecbb9'
                    }
                    x_vendor_aiagent_agent_tool_create_acl: {
                        table: 'sys_security_acl'
                        id: 'e4cf53d5db9c42af9f739251279ee236'
                    }
                    x_vendor_aiagent_agent_tool_delete_acl: {
                        table: 'sys_security_acl'
                        id: '91f4ade52d6b482db934277bc27ab400'
                    }
                    x_vendor_aiagent_agent_tool_read_acl: {
                        table: 'sys_security_acl'
                        id: '7cee2d1bdbed4753b28a096e1090ef5d'
                    }
                    x_vendor_aiagent_agent_tool_write_acl: {
                        table: 'sys_security_acl'
                        id: '423f77873ae44e9d86b021eed60ea569'
                    }
                    x_vendor_aiagent_ai_agent_activate_on_open_client_script: {
                        table: 'sys_script_client'
                        id: 'f0d9d3dcd25742aba1beb99dfbe7f260'
                    }
                    x_vendor_aiagent_ai_agent_create_acl: {
                        table: 'sys_security_acl'
                        id: '34e43e76c5874e9393cd019a31d05c11'
                    }
                    x_vendor_aiagent_ai_agent_delete_acl: {
                        table: 'sys_security_acl'
                        id: '9ee2f3c0d80a46cf95f13bb0b8407a79'
                    }
                    x_vendor_aiagent_ai_agent_read_acl: {
                        table: 'sys_security_acl'
                        id: 'e1db3819b595475090b9fce1c69215b2'
                    }
                    x_vendor_aiagent_ai_agent_write_acl: {
                        table: 'sys_security_acl'
                        id: '70fe45d7eea64661a5f526979fe8afe9'
                    }
                    x_vendor_aiagent_ai_agents_module: {
                        table: 'sys_app_module'
                        id: '8d0bd3c29b2b409296517e6c1bfedda0'
                    }
                    x_vendor_aiagent_application_menu: {
                        table: 'sys_app_application'
                        id: 'cf2c7961280c458b837b0076d9afe792'
                    }
                    x_vendor_aiagent_new_ai_agent_module: {
                        table: 'sys_app_module'
                        id: 'd10fae47c5fb4d7ba6c3aedcbe9fa112'
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '0a619af979fc4b0598168b5d6c86638f'
                        key: {
                            name: 'x_vendor_aiagent_ai_agent'
                            element: 'x_vendor_aiagent_version'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0d5cc7c6b4764362a3804c8299871a32'
                        key: {
                            name: 'x_vendor_aiagent_ai_agent'
                            element: 'x_vendor_aiagent_owner'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '10e511dfdf6f441aab62e9c041f0a23d'
                        key: {
                            name: 'x_vendor_aiagent_ai_agent'
                            element: 'x_vendor_aiagent_description'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '14b3f5180a9a47a0be562f03a1d028ff'
                        key: {
                            name: 'x_vendor_aiagent_ai_agent'
                            element: 'x_vendor_aiagent_status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '19fab12a046a485f8370c88d83d90e2e'
                        key: {
                            name: 'x_vendor_aiagent_ai_agent'
                            element: 'x_vendor_aiagent_agent_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2d9d01bdcfa84713a2634aa8223a2d83'
                        key: {
                            name: 'x_vendor_aiagent_ai_agent'
                            element: 'x_vendor_aiagent_description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2e9dab5df21e4c13ba7f5ced982374e1'
                        key: {
                            name: 'x_vendor_aiagent_ai_agent'
                            element: 'x_vendor_aiagent_documentation_url'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2f6d49f8669741bab4aecbb5ee842a1c'
                        key: {
                            name: 'x_vendor_aiagent_ai_agent'
                            element: 'x_vendor_aiagent_agent_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '34cd3ab3480d42eaa389ab369733ae73'
                        key: {
                            name: 'x_vendor_aiagent_ai_agent'
                            element: 'x_vendor_aiagent_status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '34f43c121da743a09d24bdf23543c42f'
                        key: {
                            name: 'x_vendor_aiagent_ai_agent'
                            element: 'x_vendor_aiagent_documentation_url'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '35ccfe0b8f0c4539a3cc162f3feb4306'
                        key: {
                            name: 'x_vendor_aiagent_ai_agent'
                            element: 'x_vendor_aiagent_connected_ci'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '41d406fad4574259abed599ead513637'
                        key: {
                            name: 'x_vendor_aiagent_ai_agent'
                            element: 'x_vendor_aiagent_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '444ff44a76644517b77bfd12a3d3553e'
                        key: {
                            name: 'x_vendor_aiagent_ai_agent'
                            element: 'x_vendor_aiagent_last_active'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '538d1aaa2a2b45beb1112ce460dfc9f8'
                        key: {
                            name: 'x_vendor_aiagent_ai_agent'
                            element: 'x_vendor_aiagent_name'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5ccbd6af494341e0b924f1036548f96d'
                        key: {
                            name: 'x_vendor_aiagent_ai_agent'
                            element: 'x_vendor_aiagent_agent_type'
                            value: 'autonomous'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5e0290243dcf429a83d468a76212cb4e'
                        key: {
                            name: 'x_vendor_aiagent_ai_agent'
                            element: 'x_vendor_aiagent_agent_type'
                            value: 'assisted'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '68fc3286cc5d4250adbcc4003386a83b'
                        key: {
                            name: 'x_vendor_aiagent_ai_agent'
                            element: 'x_vendor_aiagent_status'
                            value: 'development'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6a5dc7319e384584b137efd3a6bc0630'
                        key: {
                            name: 'x_vendor_aiagent_ai_agent'
                            element: 'x_vendor_aiagent_owner'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7ce86cf65a9443faae339aef16c81c44'
                        key: {
                            name: 'x_vendor_aiagent_ai_agent'
                            element: 'x_vendor_aiagent_last_active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '7ed388ef829c4ffb87c3e3a213d4382e'
                        key: {
                            name: 'x_vendor_aiagent_ai_agent'
                            element: 'x_vendor_aiagent_agent_type'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '861da0bacdb24af5b353c7fe1ff0cf92'
                        key: {
                            sys_security_acl: 'e4cf53d5db9c42af9f739251279ee236'
                            sys_user_role: {
                                id: '3b5a52507f53484fb99bb7bcecaa3d48'
                                key: {
                                    name: 'admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8d010b767d5b44a2a10d40d735a14470'
                        key: {
                            sys_security_acl: '70fe45d7eea64661a5f526979fe8afe9'
                            sys_user_role: {
                                id: '09c84d085e3747288806a3b61dc3a67b'
                                key: {
                                    name: 'itil'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9016992596bb43f6a00b7cdef070fe69'
                        key: {
                            name: 'x_vendor_aiagent_ai_agent'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '90c56339b40a4e3b86ea38ecf7ed9c90'
                        key: {
                            sys_security_acl: '423f77873ae44e9d86b021eed60ea569'
                            sys_user_role: {
                                id: '5a369fde04b74c2c9d4a5cb62e6e7143'
                                key: {
                                    name: 'itil'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a9d9755353e540238260adbff6671559'
                        key: {
                            sys_security_acl: '9ee2f3c0d80a46cf95f13bb0b8407a79'
                            sys_user_role: {
                                id: '36bc5ad29cd74d67a668768f9a3ada3c'
                                key: {
                                    name: 'admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bc320e1c48c14407996978b760195ed1'
                        key: {
                            sys_security_acl: '34e43e76c5874e9393cd019a31d05c11'
                            sys_user_role: {
                                id: '75dd61d29c8a4da1b5fb879ca5a6ddf6'
                                key: {
                                    name: 'admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bfe98129b2be46bcb1267b1907dc832e'
                        key: {
                            name: 'x_vendor_aiagent_ai_agent'
                            element: 'x_vendor_aiagent_connected_ci'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c28e810130124986ae3374ac56364821'
                        key: {
                            name: 'x_vendor_aiagent_ai_agent'
                            element: 'x_vendor_aiagent_version'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'c4abe627aefb4c99a16caa904110fce6'
                        key: {
                            name: 'x_vendor_aiagent_ai_agent'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'd13adbfc1fe248e095765834babaf9f5'
                        key: {
                            name: 'x_vendor_aiagent_ai_agent'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd79dc36ac35d4fc7b1be245b2ba749e7'
                        key: {
                            name: 'x_vendor_aiagent_ai_agent'
                            element: 'x_vendor_aiagent_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd7ce67f66b9b41f7898d0c556a5c110b'
                        key: {
                            name: 'x_vendor_aiagent_ai_agent'
                            element: 'x_vendor_aiagent_status'
                            value: 'inactive'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'dd16c8c8b3214403a9daa88ec2b4ff62'
                        key: {
                            name: 'x_vendor_aiagent_ai_agent'
                            element: 'x_vendor_aiagent_status'
                            value: 'active'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'de907a00c1c34f048cf201f12b6864f6'
                        key: {
                            name: 'x_vendor_aiagent_ai_agent'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ed591f1e58ee40ababbeabbdfa0e2d81'
                        key: {
                            sys_security_acl: '91f4ade52d6b482db934277bc27ab400'
                            sys_user_role: {
                                id: '3286f4a930dc443095c0b21c02bff0f4'
                                key: {
                                    name: 'admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f35b445f93884ba79cd072e7840f205e'
                        key: {
                            name: 'x_vendor_aiagent_ai_agent'
                            element: 'x_vendor_aiagent_agent_type'
                            value: 'hybrid'
                        }
                    },
                ]
            }
        }
    }
}
