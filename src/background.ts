// listStorage.ts

export class ListStorage<T> {
  private key: string;

  constructor(key: string) {
    this.key = key;
  }

  /** Obtiene la lista completa */
  async getAll(): Promise<T[]> {
    return new Promise((resolve) => {
      chrome.storage.local.get(this.key, (res) => {
        resolve(res[this.key] ?? []);
      });
    });
  }

  /** Añade un ítem a la lista */
  async add(item: T): Promise<void> {
    const list = await this.getAll();
    list.push(item);
    return new Promise((resolve) => {
      chrome.storage.local.set({ [this.key]: list }, () => resolve());
    });
  }

  /** Elimina un ítem según predicado */
  async remove(predicate: (item: T) => boolean): Promise<void> {
    const list = await this.getAll();
    const newList = list.filter((x) => !predicate(x));
    return new Promise((resolve) => {
      chrome.storage.local.set({ [this.key]: newList }, () => resolve());
    });
  }

  /** Limpia toda la lista */
  async clear(): Promise<void> {
    return new Promise((resolve) => {
      chrome.storage.local.set({ [this.key]: [] }, () => resolve());
    });
  }
}
