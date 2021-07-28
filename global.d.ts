type GenericEvent = (...args: any) => void;
type EmptyEvent = () => void;

type EmptyEvents = "onResourceLoad" | "onResourceUnload"

type EventType<T extends string> = T extends EmptyEvents ? EmptyEvent : GenericEvent

type EventArgsType<T extends string> = T extends EmptyEvents ? [] : any[]

interface SandboxAPI {
    registerNetEvent(event: string): void

    on<T extends string>(event: T, callback: EventType<T>): void

    emit<T extends string>(event: T, ...args: EventArgsType<T>): void
    emitServer<T extends string>(event: T, ...args: EventArgsType<T>): void
    emitClient<T extends string>(client: any, event: T, ...args: EventArgsType<T>): void

    loadResourceFile(file: string): string | null
    saveResourceFile(file: string, content: string): boolean
}

declare const sandbox: SandboxAPI