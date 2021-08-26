class ItemsController < ApplicationController
    before_action :set_dep
    before_action :set_item, only: [:show, :destroy, :edit, :update]

    def index
        render component: "Items", props: {dep: @dep, items: @dep.items}
    end

    def show
        # render component: "Item", props: {dep: @dep, item: @item}
        render component: "Item", props: {item: @item, coms: @item.comments}
    end

    def new
        render component: "ItemNew", props: {dep: @dep}
    end

    def create
        item = @dep.items.new(item_params)
        if(item.save)
            redirect_to department_path(@dep.id)
        end
    end

    def edit
        render component: "ItemEdit", props: {dep: @dep, item: @item}
    end

    def update
        @item.update(item_params)
        redirect_to department_path(@dep.id)
    end

    def destroy
        @item.destroy
        redirect_to department_path(@dep.id)
    end


    private
    def set_dep
        @dep = Department.find(params[:department_id])
    end

    def set_item
        @item = @dep.items.find(params[:id])
    end

    def item_params
        params.require(:item).permit(:name)
    end

end
