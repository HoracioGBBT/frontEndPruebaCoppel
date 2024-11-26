export interface Mapper<M, E> {
    toModel(entity: E): M;
    toEntity( value: M ): E;
    toModelList( values: E[] ): M[];
    toEntityList( values: M[]): E[];
}