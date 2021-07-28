type GenericEvent = (...args: any) => void;
type EmptyEvent = () => void;

type EmptyEvents = "onLoad" | "onUnload"

type EventType<T extends string> = T extends EmptyEvents ? EmptyEvent : GenericEvent

type EventArgsType<T extends string> = T extends EmptyEvents ? [] : any[]

type ValidModules = "core"

type Module<T extends ValidModules> = T extends "core" ? SandboxAPI : never

interface SandboxAPI {
    registerNetEvent(event: string): void

    on<T extends string>(event: T, callback: EventType<T>): void

    emit<T extends string>(event: T, ...args: EventArgsType<T>): void
    emitServer<T extends string>(event: T, ...args: EventArgsType<T>): void
    emitClient<T extends string>(client: any, event: T, ...args: EventArgsType<T>): void

    loadResourceFile(file: string): string | null
    saveResourceFile(file: string, content: string): boolean
}


declare function loadModule<T extends ValidModules>(module: T): Module<T>