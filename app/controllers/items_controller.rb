class ItemsController < ApplicationController
    before_action :set_dep
    before_action :set_item, only: [:show, :destroy]

    def index
        render component: "Items", props: {dep: @dep, items: @dep.items}
    end

    def show
    end

    def destroy
        @item.destroy
        redirect_to department_items_path
    end


    private
    def set_dep
        @dep = Department.find(params[:department_id])
    end

    def set_item
        @item = @dep.items.find(params[:id])
    end

end
